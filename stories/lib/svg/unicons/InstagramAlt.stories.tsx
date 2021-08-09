import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { InstagramAlt, InstagramAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/InstagramAlt",
  component: InstagramAlt,
} as ComponentMeta<typeof InstagramAlt>;

const Template: ComponentStory<typeof InstagramAlt> = (
  args: InstagramAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <InstagramAlt {...args} />
    <InstagramAlt {...args} fill="red.500" />
    <InstagramAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
