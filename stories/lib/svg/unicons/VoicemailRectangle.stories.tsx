import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VoicemailRectangle, VoicemailRectanglePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/VoicemailRectangle",
  component: VoicemailRectangle,
} as ComponentMeta<typeof VoicemailRectangle>;

const Template: ComponentStory<typeof VoicemailRectangle> = (
  args: VoicemailRectanglePropsI
) => (
  <x.div display="flex" gap="20px">
    <VoicemailRectangle {...args} />
    <VoicemailRectangle {...args} fill="red.500" />
    <VoicemailRectangle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
