import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { IntercomAlt, IntercomAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/IntercomAlt",
  component: IntercomAlt,
} as ComponentMeta<typeof IntercomAlt>;

const Template: ComponentStory<typeof IntercomAlt> = (
  args: IntercomAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <IntercomAlt {...args} />
    <IntercomAlt {...args} fill="red.500" />
    <IntercomAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
