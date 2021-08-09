import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Venus, VenusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Venus",
  component: Venus,
} as ComponentMeta<typeof Venus>;

const Template: ComponentStory<typeof Venus> = (args: VenusPropsI) => (
  <x.div display="flex" gap="20px">
    <Venus {...args} />
    <Venus {...args} fill="red.500" />
    <Venus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
