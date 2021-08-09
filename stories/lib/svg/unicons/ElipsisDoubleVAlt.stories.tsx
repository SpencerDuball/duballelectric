import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ElipsisDoubleVAlt, ElipsisDoubleVAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ElipsisDoubleVAlt",
  component: ElipsisDoubleVAlt,
} as ComponentMeta<typeof ElipsisDoubleVAlt>;

const Template: ComponentStory<typeof ElipsisDoubleVAlt> = (
  args: ElipsisDoubleVAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ElipsisDoubleVAlt {...args} />
    <ElipsisDoubleVAlt {...args} fill="red.500" />
    <ElipsisDoubleVAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
