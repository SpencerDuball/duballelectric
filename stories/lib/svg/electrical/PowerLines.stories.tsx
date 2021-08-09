import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PowerLines, PowerLinesPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/PowerLines",
  component: PowerLines,
} as ComponentMeta<typeof PowerLines>;

const Template: ComponentStory<typeof PowerLines> = (
  args: PowerLinesPropsI
) => (
  <x.div display="flex" gap="20px">
    <PowerLines {...args} />
    <PowerLines {...args} fill="red.500" />
    <PowerLines {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
